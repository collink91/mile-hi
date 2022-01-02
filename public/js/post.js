const newFormHandler = async function (event) {
  event.preventDefault();

  // Made the following a drop-down with these options: Indoor, Outdoor, Events, Sports
  const keywordSelect = document.querySelector('select[name="keyword"]');
  const keyword = keywordSelect.options[keywordSelect.selectedIndex].value;
  const type = document.querySelector('input[name="type"]').value;
  const where = document.querySelector('input[name="where"]').value;
  const description = document.querySelector('input[name="description"]').value;

  // Optional things
  const event_date = document.querySelector('input[name="event-date"]').value;
  const event_time = document.querySelector('input[name="event-time"]').value;
  const groupSelect = document.querySelector('select[name="group-activity"]');
  const group_activity_raw =
    groupSelect.options[groupSelect.selectedIndex].value;

  // Default response: "Yes" = true; otherwise will be false ("no")
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
  // Change this reference as neeeded
  .querySelector("#new-activity-form")
  .addEventListener("submit", newFormHandler);
