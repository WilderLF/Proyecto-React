const Item = ( props ) => {

  const {precio, title, detalle} = props.item

  return (
    <div>
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://motoenvioslm.com/wp-content/uploads/2021/04/zonadeentrega.png" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
    {title}
      <div class="badge badge-secondary">{precio}</div>
    </h2>
    <p>{detalle}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Pedir ahora</button>
    </div>
  </div>
</div>
    </div>
  )
}
export default Item