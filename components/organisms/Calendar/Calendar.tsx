import { Text } from "@components/atoms";
import {
  CalendarEvents,
  CalendarMonth,
  CalendarStatus,
  CalendarYear,
} from "@components/molecules";
import { EventDTO } from "@dto";
import { Check } from "@icons/solid";
import { styled } from "@stitches";
import { FC, useMemo } from "react";

export type EventType = { date: Date; name: string };

export type MonthType = {
  month: number;
  monthLabel: string;
  events: EventType[];
};

export type YearType = {
  year: number;
  months: MonthType[];
};

export type CollectionEventsType = YearType[];

const insertCollectionElement = (
  collection: CollectionEventsType,
  event: EventType
) => {
  const date = event.date;
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthLabel = date.toLocaleString("fr", { month: "long" });

  let yearElement: YearType | undefined = collection.find(
    (element) => element.year === year
  );
  if (!yearElement) {
    yearElement = { year, months: [] };
    collection.push(yearElement);
  }

  let monthElement: MonthType | undefined = yearElement.months.find(
    (element) => element.month === month
  );
  if (!monthElement) {
    monthElement = { month, monthLabel, events: [] };
    yearElement.months.push(monthElement);
  }

  monthElement.events.push(event);
  return collection;
};

export const CalendarContainer = styled("div", {
  position: "relative",
  mx: "auto",
  maxWidth: "$max",
  [`& ${CalendarYear} > .label`]: {
    paddingLeft: "$128",
    marginBottom: "$2",
  },
  [`& ${CalendarMonth} > .label`]: {
    position: "absolute",
    left: "$0",
    width: "104px",
    textAlign: "center",
  },
  [`& ${CalendarYear} + ${CalendarYear}`]: {
    marginTop: "$8",
  },
  [`& ${CalendarMonth} + ${CalendarMonth}`]: {
    marginTop: "$4",
  },
  [`& ${CalendarEvents}`]: {
    paddingLeft: "$128",
  },
  [`& ${CalendarStatus}`]: {
    position: "absolute",
  },
  [`& ${CalendarYear} > ${CalendarStatus}`]: {
    top: "6px",
    left: "104px",
  },
  [`& ${CalendarEvents} ${CalendarStatus}`]: {
    top: "$4",
    left: "-$24",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: "111px",
    width: "2px",
    backgroundColor: "$neutral6",
    top: "14px",
    bottom: "12px",
  },
});

export type CalendarProps = {
  events?: EventDTO[];
};

export const Calendar: FC<CalendarProps> = ({ events = [] }) => {
  const collectionEvents = useMemo(() => {
    return events
      .map<EventType>(({ date, ...props }) => ({
        date: new Date(date),
        ...props,
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .reduce(insertCollectionElement, []);
  }, [events]);

  return (
    <CalendarContainer>
      {collectionEvents.map(({ year, months }) => (
        <CalendarYear key={year}>
          <CalendarStatus fill={true} />
          <Text className="label" as="h3">
            {year}
          </Text>
          {months.map(({ month, monthLabel, events }) => (
            <CalendarMonth key={month}>
              <Text className="label" as="h4">
                {monthLabel}
              </Text>
              <CalendarEvents>
                {events.map(({ date, name }) => (
                  <Text key={name} as="span">
                    <CalendarStatus>
                      <Check size={10} hidden={date.getTime() > Date.now()} />
                    </CalendarStatus>
                    {name}
                  </Text>
                ))}
              </CalendarEvents>
            </CalendarMonth>
          ))}
        </CalendarYear>
      ))}
    </CalendarContainer>
  );
};
