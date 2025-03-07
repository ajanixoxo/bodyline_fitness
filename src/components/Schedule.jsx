const Schedule = () => {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const timeSlots = [
      "06:00 AM",
      "07:00 AM",
      "08:00 AM",
      "09:00 AM",
      "10:00 AM",
      "04:00 PM",
      "05:00 PM",
      "06:00 PM",
      "07:00 PM",
      "08:00 PM",
    ]
  
    const classes = {
      Monday: {
        "06:00 AM": { name: "CrossFit", trainer: "John" },
        "07:00 AM": { name: "Yoga", trainer: "Sarah" },
        "08:00 AM": { name: "Boxing", trainer: "Mike" },
        "05:00 PM": { name: "Strength", trainer: "David" },
        "06:00 PM": { name: "HIIT", trainer: "Emma" },
        "07:00 PM": { name: "Zumba", trainer: "Lisa" },
      },
      // Add more days and classes as needed
    }
  
    return (
      <div className="overflow-x-auto">
        <table className="schedule-table w-full min-w-[800px]">
          <thead>
            <tr>
              <th className="w-20">Time</th>
              {weekDays.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time) => (
              <tr key={time}>
                <td className="font-medium text-navy">{time}</td>
                {weekDays.map((day) => {
                  const classInfo = classes[day]?.[time]
                  return (
                    <td key={`${day}-${time}`} className={classInfo ? "class-slot" : ""}>
                      {classInfo && (
                        <div>
                          <div className="font-medium text-navy">{classInfo.name}</div>
                          <div className="text-sm text-green">{classInfo.trainer}</div>
                        </div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
  export default Schedule
  
  