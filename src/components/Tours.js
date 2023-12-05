import Cards from "./Cards"
export default function Tours(props) {
  return (
    <div>
      <div>
        <h2 className="heading">Tour Plan</h2>
      </div>
      <div className="Cards">
        { 
          props.tours.map((tour)=>{
            return <Cards {...tour} removeTour={props.removeTour}></Cards>
          })
        }
      </div>
    </div>
  )
}
