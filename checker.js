async function runScript() {
  const maxIterations = 100000;

  // Mapping of strings in different languages
  const translations = {
      details: {
          he: "פרטים",  // Hebrew
          en: "Details",  // English
      },
      take_space: {
          he: "הפריט הזה לא תופס נפח",  // Hebrew
          en: "The item does not take up space",  // English
      },
      alerts: {
          he: "הפריט תופס מקום!",  // Hebrew
          en: "Take up storage!",  // English
      },
      warnings: {
          he: "הכפתור לא נמצא.",  // Hebrew
          en: "Button not found.",  // English
      }
  };

  // Function to get the appropriate translation based on browser language
  function getTranslation(key) {
      const language = navigator.language || navigator.userLanguage;
      const lang = language.split('-')[0];  // Check the primary language (e.g., "en" instead of "en-US")
      return translations[key][lang] || translations[key].en;  // Default to English if language is not supported
  }

  const details_str = getTranslation('details');
  const take_space_str = getTranslation('take_space');
  const alertMessage = getTranslation('alerts');
  const warningMessage = getTranslation('warnings');

  // Function to check if the target string is present in the page content
  function containsTargetString(targetString) {
      return document.body.innerText.includes(targetString);
  }

  // Function to click a button if found, otherwise log a warning
  async function clickButton(selector, message) {
      const button = document.querySelector(selector);
      if (button) {
          button.click();
      } else {
          console.warn(message);  // Display the appropriate warning message
      }
  }

  // Function to wait for the target string to appear or go back if timeout is exceeded
  async function waitForTargetString(targetString, timeout = 2000) {
      let startTime = Date.now();
      let checkInterval = 200;  // Check every 200 ms
      while (!containsTargetString(targetString) && (Date.now() - startTime) < timeout) {
          await new Promise(resolve => setTimeout(resolve, checkInterval));  // Wait before checking again
      }
      
      // If the target string is not found and the timeout is exceeded, click the 'back' button
      if (Date.now() - startTime >= timeout) {
          console.warn("Timeout exceeded. Going back by clicking the 'back' button...");
          await clickButton('.SxgK2b.OQEhnd', warningMessage);  // Use the clickButton to go back
          return false;  // Return false if not found
      }
      
      return containsTargetString(targetString);  // Return true if the target string was found within the timeout
  }

  for (let i = 0; i < maxIterations; i++) {
      try {
          // Wait for details_str to appear
          const isLoaded = await waitForTargetString(details_str);
          if (!isLoaded) {
              console.warn("Target string 1 not found after waiting for the page to load.");
              
              // Retry after going back
              console.warn("Retrying after going back...");
              await clickButton('.SxgK2b.OQEhnd', warningMessage);  // Click to go back to the previous page
              await new Promise(resolve => setTimeout(resolve, 1000)); // Wait a moment before retrying
              continue;  // Continue to the next iteration
          }

          // Check if take_space_str is present
          if (!containsTargetString(take_space_str)) {
              alert(alertMessage);  // Display the alert message in the appropriate language
              break;
          }

          // Click the next button
          await clickButton('.SxgK2b.Cwtbxf', warningMessage);  // Display the warning message in the appropriate language
          
          // Wait before executing the next iteration
          await new Promise(resolve => setTimeout(resolve, 200));

      } catch (error) {
          console.error("An error occurred:", error);
          break;  // Optionally: continue to the next iteration instead of breaking completely
      }
  }
}

runScript();