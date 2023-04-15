import { useState, useId } from 'react'
import './filters.css'

export function Filters ({onChange}) {
  const [minPrice, setMinPrice] = useState()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    // code smell
    // dos fuentes de la verdad
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value}))
  }

  const handleChangeCategory = (event) => {
    // code smell
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice} />
        <span>${minPrice}</span>

      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>SmartPhones</option>
        </select>
      </div>
    </section>
  )
}