const DaySquare = ({ level }) => {
  const levelClasses = {
    0: 'bg-gray-200',
    1: 'bg-gray-300',
    2: 'bg-gray-400',
    3: 'bg-gray-500',
    4: 'bg-gray-600'
  };

  return <div className={`m-1 h-4 w-4 ${levelClasses[level]}`}></div>;
};

const ContributionTrend = () => {
  const data = [
    // Week 1
    [0, 1, 2, 3, 4, 3, 2],
    // Week 2
    [1, 2, 3, 4, 0, 1, 2]
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-2 flex justify-between px-2 text-sm">
        <span>Oct 2023</span> <span>Nov 2023</span> <span>Dec 2023</span>
        <span>Jan 2024</span> <span>This week</span>
      </div>
      <div className="flex flex-wrap">
        {data.map((week, i) =>
          week.map((day, j) => <DaySquare key={`day-${i}-${j}`} level={day} />)
        )}
      </div>
      <div className="mt-2 flex justify-end px-2 text-sm">
        <span>Less</span>
        {/* Legend squares */}
        <div className="flex">
          {[0, 1, 2, 3, 4].map((level) => (
            <DaySquare key={level} level={level} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default ContributionTrend;
