import React from "react";
import classes from "./App.module.css";

export default function App() {
  return (
    <div>
      <div className={classes.wrapper}>
        <ul>
          <li>
            <input type="checkbox" id="listItem1" />
            <label for="listItem1">Service 1</label>
            <ul>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="listItem2" />
            <label for="listItem2">Service 2</label>
            <ul>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="listItem3" />
            <label for="listItem3">Service 3</label>
            <ul>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="listItem4" />
            <label for="listItem4">Service 4</label>
            <ul>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
