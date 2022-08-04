import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCar, faTaxi, faPlane, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import {DateRange} from 'react-date-range'
import { useState } from "react"
import 'react-date-range/dist/theme/default.css'
import 'react-date-range/dist/styles.css'
import { format } from "date-fns"


const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openGuests, setOpenGuests] = useState(false)
  const [guests, setGuests] = useState({
    adult:1,
    children: 0,
    room:1
  });

  const handleGuest = (name, operation) =>{
    setGuests(prev=>{return{
      ...prev, [name] : operation === "i" ? guests[name] +1 : guests[name] -1
    }})
  }

  return (
    <div className="header">
            <div className="headerContainer">

        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxi</span>
            </div>
        </div>
       { type !== "list" &&
       
       <> <h1 className="headerTitle">Kosher Rentals, wherever you crave.</h1>
        <p className="headerDesc">Get rewards for your travels - unlock instant savings of 10% or more with a free Guestay account</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faBed} className="headerIcon"/>
    <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
        </div>

        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
        <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MMMM d yyyy")} to ${format(date[0].endDate, "MMMM d yyyy")}`}</span>
        {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/> }
        </div>

        <div className="headerSearchItem">
        <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
        <span onClick={() => setOpenGuests(!openGuests)} className="headerSearchText">{`${guests.adult} adult * ${guests.children} children ${guests.room} room`}</span>
{openGuests &&        <div className="guests">
          <div className="guestItem">
            <span className="guestText">Adults</span>
            <div className="guestCounter">
            <button disabled={guests.adult <=1} className="guestCounterButton" onClick={() => handleGuest("adult", "d")}>-</button>
            <span className="guestCounterNumber">{guests.adult}</span>
            <button className="guestCounterButton" onClick={() => handleGuest("adult", "i")}>+</button>
            </div>
          </div>
          <div className="guestItem">
            <span className="guestText">Children</span>
            <div className="guestCounter">
            <button disabled={guests.children <=0} className="guestCounterButton" onClick={() => handleGuest("children", "d")}>-</button>
            <span className="guestCounterNumber">{guests.children}</span>
            <button className="guestCounterButton" onClick={() => handleGuest("children", "i")}>+</button>
            </div>
          </div>
          <div className="guestItem">
            <span className="guestText">Rooms</span>
            <div className="guestCounter">
            <button disabled={guests.room <=1} className="guestCounterButton" onClick={() => handleGuest("room", "d")}>-</button>
            <span className="guestCounterNumber">{guests.room}</span>
            <button className="guestCounterButton" onClick={() => handleGuest("room", "i")}>+</button>
            </div>
          </div>
        </div>}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn">Search</button>
        </div>
        </div>  </>}
        </div>
    </div>
  )
}

export default Header