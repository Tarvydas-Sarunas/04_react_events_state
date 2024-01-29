import { useState } from "react"
import { personData } from './data'

export default function PersonList() {

  const [mainArr, setMainArr] = useState(personData)

  const howMany = mainArr.length
  const malesCount = mainArr.filter((pObj) => pObj.gender === 'male').length
  const femalesCount = mainArr.filter((pObj) => pObj.gender === 'female').length
  const ageAbove37 = mainArr.filter((pObj) => pObj.age > 37)
  const longestName = mainArr.slice().sort((a, b) => b.name.length - a.name.length)[0]
  const personsAge = mainArr.reduce((count, pObj) => count + pObj.age, 0)
  const hobies = mainArr.map((pObj) => pObj.hobby)
  return (
    <div>
      <h2>Persons ({howMany})</h2>
      <fieldset>
        <legend>Info</legend>
        <p>Total persons: {howMany}</p>
        <p>Total males: {malesCount}</p>
        <p>Total females: {femalesCount}</p>
        <p>Persons above 37 years: {ageAbove37.map((pObj) => pObj.name).join(', ')}</p>
        <p>Persons with longest name: {longestName.name}</p>
        <p>Average person age: {(personsAge / mainArr.length).toFixed(2)}</p>
        <p>Total person age: {personsAge}</p>
        <p>(all hobies atskirti kableliais ir tarpeliais) {hobies.join(', ')}</p>
      </fieldset>
      <ul className="grid">
        {mainArr.map((pObj) => (
        <li key={pObj.id} className="counter">
          <h3>{pObj.name}</h3>
          <p>Age: {pObj.age}</p>
          <p>Gender: {pObj.gender}</p>
          <p>Hobby: {pObj.hobby}</p>
        </li>))}
      </ul>
    </div>
  )
}

