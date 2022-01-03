const newFormHandler = async function (event) {
  event.preventDefault();

  // "Keywords" is a drop-down menu with these options: Indoor, Outdoor, Events, Sports
  const keywordSelect = document.querySelector('select[name="keyword"]');
  const keyword = keywordSelect.options[keywordSelect.selectedIndex].value;
  const type = document.querySelector('input[name="type"]').value;
  const where = document.querySelector('input[name="where"]').value;
  const description = document.querySelector('input[name="description"]').value;

  // Optional (based on model requirements)
  const event_date = document.querySelector('input[name="event-date"]').value;
  const event_time = document.querySelector('input[name="event-time"]').value;
  const groupSelect = document.querySelector('select[name="group-activity"]');
  const group_activity_raw =
    groupSelect.options[groupSelect.selectedIndex].value;

  // Default response: "yes" = true; otherwise will be false ("no")
  const group_activity = group_activity_raw === "yes";

  await fetch(`/api/activities/`, {
    method: "POST",
    body: JSON.stringify({
      keyword,
      type,
      where,
      event_date,
      event_time,
      group_activity,
      description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/");
};

document
  .querySelector("#new-activity-form")
  .addEventListener("submit", newFormHandler);
