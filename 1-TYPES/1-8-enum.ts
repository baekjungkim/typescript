{
  /**
   * Enum
   * Typescript 에서는 정말 필요한 경우가 아니라면 사용하지 않는것으로 한다.
   * => Union Type으로 대체
   */

  // Javascript
  const MAX_NUM = 9;
  const MAX_STUDENTS_PER_CLASS = 20;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum Days {
    Monday = 1, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  let day = Days.Sunday;
  day = 100; // 타입보장 X 💩

  console.log(day);

  // Union Type 대체
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Tuesday";
  dayOfweek = "Wednesday";
}
