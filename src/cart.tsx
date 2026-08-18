import { useState } from "react"

const Cart = () => {
  const [item, setItem] = useState<string>("")
  const [itemList, setItemList] = useState<string[]>([])

  const handleItem = () => {
    const trimmedItem = item.trim()
    if (!trimmedItem) return

    setItemList((prev) => [...prev, trimmedItem])
    setItem("")
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleItem}>Add Item</button>
      <ul>
        {itemList.map((listItem, index) => (
          <li key={`${listItem}-${index}`}>{listItem}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart