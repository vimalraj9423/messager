const data = {
  data: ["one", "two", "three", "four"]
}

export const gods = [
  {
    name: "Zeus",
    description: "God Of Sky",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1U87XrM6oREF-_hfKLXGiAIhuHmy98AUKR1YxkRtPluubyTY"
  },
  {
    name: "Aries",
    description: "God Of War",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeomx9nBtfevSoZGH0XQR49fU3r-CLe3u-PxA477z_9x1Ise3"
  }
]

export const mockData = () => Promise.resolve(data.data)
export const mockGods = () => Promise.resolve(gods)
