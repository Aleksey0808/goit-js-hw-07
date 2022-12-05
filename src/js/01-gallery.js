import { galleryItems } from './gallery-items.js'
// Change code below this line

// console.log(galleryItems)

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryItemMarkup(galleryItems)
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)
galleryEl.addEventListener('click', onItemGalleryClick)

// console.log(createGalleryItemMarkup(galleryItems))

function createGalleryItemMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a href="${original}" class="gallery__link">
      <img src="${preview}" alt="${description}" class="gallery__image">
      </a>
    </div>`
    })
    .join('')
}

function onItemGalleryClick(evt) {
  evt.preventDefault()

  const isGalleryoriginal = evt.target.classList.contains('gallery__link')

  if (!isGalleryoriginal) {
    return
  }
  console.log(evt.target)
}
////////////////////////////////////////////
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#e91e63', rgb: '233,30,99' },
//   { hex: '#9c27b0', rgb: '156,39,176' },
//   { hex: '#673ab7', rgb: '103,58,183' },
//   { hex: '#3f51b5', rgb: '63,81,181' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#00bcd4', rgb: '0,188,212' },
//   { hex: '#009688', rgb: '0,150,136' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
//   { hex: '#ff9800', rgb: '255,152,0' },
//   { hex: '#795548', rgb: '121,85,72' },
//   { hex: '#607d8b', rgb: '96,125,139' },
// ];

// const paletteContainer = document.querySelector('.js-palette')
// const cardsMarkup = createColorCardsMarkup(colors)

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)

// paletteContainer.addEventListener('click', onPaletteContainerClick)

// function createColorCardsMarkup(colors) {
//   return colors
//     .map(({ hex, rgb }) => {
//       return `
//     <div class="color-card">
//      <div><div><div> <div
//      class="color-swatch"
//      data-hex="${hex}"
//      data-rgb="${rgb}"
//      style="background-color: ${hex}"
//    ></div></div></div></div>
//       <div class="color-meta">
//         <p>HEX: ${hex}</p>
//         <p>RGB: ${rgb}</p>
//       </div>
//     </div>
//     `
//     })
//     .join('')
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch')

//   if (!isColorSwatchEl) {
//     return
//   }

//   const swatchEl = evt.target
//   const parentColorCard = swatchEl.closest('.color-card')

//   removeActiveCardClass()
//   addActiveCardClass(parentColorCard)
//   setBodyBgColor(swatchEl.dataset.hex)
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active')

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active')
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active')
// }

////////////////////////////////////////////////////////////////////////////////
// import { galleryItems } from './gallery-items.js'

// console.log(galleryItems)
// // Change code below this line

// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach((element) => {
//   const galleryItem = document.createElement('div')
//   galleryItem.className = 'gallery__item'
//   const galleryLink = document.createElement('a')
//   galleryLink.className = 'gallery__link'
//   galleryLink.href = element.original
//   const galleryImage = document.createElement('img')
//   galleryImage.className = 'gallery__image'
//   galleryImage.src = element.preview
//   galleryImage.setAttribute('data-source', element.original)
//   galleryImage.alt = element.description

//   galleryItem.append(galleryLink)
//   galleryLink.append(galleryImage)
//   items.push(galleryItem)
// })

// gallery.append(...items)

// gallery.addEventListener('click', (e) => {
//   e.preventDefault()
//   if (e.target.nodeName !== 'IMG') {
//     return
//   }

//   const selectedImage = e.target.getAttribute('data-source')

//   const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">
// `)

//   instance.show()

//   gallery.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape') {
//       instance.close()
//     }
//   })
// })
