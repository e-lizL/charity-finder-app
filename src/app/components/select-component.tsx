
export default function SelectComponent() {

const API_KEY = process.env.GLOBAL_GIVING_API_KEY

  const mockData = [
    {
      name: "comic-relief",
      homeCountry: "uk",
      serveCountry: "uk",
      id: 1
    },
    {
      name: "save the children",
      homeCountry: "America",
      serveCountry: "Ghana",
      id: 2
    }
  ]

  return (
    <>
      <label htmlFor="cars">Find a charity:</label>
      <select name="cars" id="cars">
        {mockData.map(item => (
          <option
            value={item.name}
            key={item.id}
          >
            {item.name}
          </option>
        ))}
      </select>
    </>
  )
}
