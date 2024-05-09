import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <div class="col-lg-2">
      <h4 class="d-flex justify-content-between align-items-center mx-3">
        <span class="text-primary fs-3">Категорії</span>
      </h4>
      <ul class="list-group fs-5">
        <li class="list-group-item">Електроніка</li>
        <li class="list-group-item">Одяг</li>
        <li class="list-group-item">Косметика</li>
        <li class="list-group-item">Книги</li>
        <li class="list-group-item">Іграшки</li>
      </ul>
    </div>
  );
}
