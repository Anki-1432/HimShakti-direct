export default function Card({title, description}) {

  return (

    <div className="border p-5 rounded shadow">

      <h2 className="font-bold text-xl">
        {title}
      </h2>

      <p>
        {description}
      </p>

    </div>

  );

}