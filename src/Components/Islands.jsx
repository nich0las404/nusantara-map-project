import React, {useEffect} from 'react'
import GroupedIslands from '../element/GroupedIslands'
import { majorIslands } from '../info/Island_info'
const Islands = ({ selectedIsland }) => {
  useEffect(() => {
    if (selectedIsland) {
      const targetElement = document.getElementById(selectedIsland);
  
      if (targetElement) {
        // Scroll to the element
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
  
        // Expand the collapsible panel
        const checkbox = targetElement.querySelector("input[type='checkbox']");
        if (checkbox) {
          checkbox.checked = true; // Programmatically expand the collapsible
        }
      }
    }
  }, [selectedIsland]);
  
  return (
    <div id='islands' className='w-full justify-center flex flex-col items-center'>
      {majorIslands.map((majorIsland, index) =>
        <GroupedIslands key={index}
        majorIsland={majorIsland}
        />
      )}
    </div>
  )
}

export default Islands