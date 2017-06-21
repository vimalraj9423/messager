import React from "react"
import { render } from "react-dom"
import GodsContainer from "./GodsContainer"

render(
  <GodsContainer gods={window.__APP_INITIAL_STATE__} />,
  document.getElementById("root")
)
