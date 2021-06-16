const BACKEND_SERVICE = "http://nest-js-service";

const get_data = () => {
  return fetch(`${BACKEND_SERVICE}/cats`);
};

const show_data = async () => {
  get_data()
    .then((response) => response.json())
    .then((data) => (document.body.innerHTML = data))
    .catch((err) => (document.body.innerHTML = err));
};

show_data();
