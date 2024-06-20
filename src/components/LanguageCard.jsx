
import React from 'react'
import '../Style/LanguageCard.css'
import imageHTML from '../img/html.svg'

function LanguageCard() {
  return (
    <section id="card1" class="card">
      <img src={imageHTML} alt="HTML" />
      <div class="card__content">
        <p class="card__title">Lorem Ipsum</p>
        <p class="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
          tincidunt augue id, efficitur massa.
        </p>
      </div>
    </section>

  )
}

export default LanguageCard