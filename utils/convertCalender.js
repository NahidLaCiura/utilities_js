export function convertCalender() {
  const isoString = new Date().toISOString();
  const date = new Date(isoString);
return(
    new Intl.DateTimeFormat("fa", {
      month: "long",
      day: "numeric",
      year: "numeric"
    }).format(date)
  );



  // const faDateTime = new Intl.DateTimeFormat("fa", {
  //   year: "2-digit",
  //   month: "2-digit",
  //   day: "2-digit",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZoneName: "short"
  // }).format;
  // const now = Date.now();
  // console.log(faDateTime(now));


  // const faTime = new Intl.DateTimeFormat("fa", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZoneName: "short",
  //   timeZone: "UTC"
  // });
  // const now = Date.now();
  // console.log(faTime.format(now));

  // const date = new Date(Date.UTC(2021, 8, 8, 3, 0, 0, 200));
  // const faDate = new Intl.DateTimeFormat("fa", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric"
  // }).format(date);
  // console.log(faDate);


  // const rtf = new Intl.RelativeTimeFormat("en", {
  //   localeMatcher: "best fit", // other values: "lookup"
  //   numeric: "always", // other values: "auto"
  //   style: "long", // other values: "short" or "narrow"
  // });
  // console.log(rtf.format(-1, "day"));
  // console.log(rtf.format(1, "day"));
}
