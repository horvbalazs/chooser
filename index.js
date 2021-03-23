window.onload = () => {
  const items = [];
  const list = document.getElementById("list");
  const form = document.getElementById("form");
  const rand = document.getElementById("randomize");

  form.onsubmit = (ev) => {
    ev.preventDefault();

    const value = ev.target.getElementsByTagName("INPUT")[0].value;
    ev.target.getElementsByTagName("INPUT")[0].value = "";

    const el = document.createElement("div");
    el.innerHTML = value;
    list.appendChild(el);
    items.push(value);
    rand.disabled = false;
  };

  rand.onclick = (ev) => {
    ev.preventDefault();
    const total = items.length;

    window.alert(items[Math.floor(Math.random() * total)]);
  };
};
