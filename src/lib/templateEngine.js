/**
 * Simple template engine using string interpolation
 * Replaces {{variable}} with corresponding values
 */

/**
 * Render a template string with data
 * @param {string} template - Template string with {{variable}} placeholders
 * @param {Object} data - Data object to inject
 * @returns {string} - Rendered HTML
 */
function renderTemplate(template, data) {
  let result = template;

  // Replace all {{variable}} patterns
  Object.keys(data).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, data[key]);
  });

  // Handle simple if conditions {{#if variable}}...{{/if}}
  result = handleIfConditions(result, data);

  // Handle loops {{#each array}}...{{/each}}
  result = handleEachLoops(result, data);

  return result;
}

/**
 * Handle {{#if variable}}...{{/if}} conditions
 */
function handleIfConditions(template, data) {
  const ifRegex = /{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g;

  return template.replace(ifRegex, (match, variable, content) => {
    // Check if variable exists and is truthy
    if (data[variable]) {
      return content;
    }
    return '';
  });
}

/**
 * Handle {{#each array}}...{{/each}} loops
 */
function handleEachLoops(template, data) {
  const eachRegex = /{{#each\s+(\w+)}}([\s\S]*?){{\/each}}/g;

  return template.replace(eachRegex, (match, arrayName, content) => {
    const array = data[arrayName];

    if (!Array.isArray(array)) {
      return '';
    }

    return array
      .map((item) => {
        let itemContent = content;

        // Replace {{this}} with the item itself
        itemContent = itemContent.replace(/{{this}}/g, item);

        // If item is an object, replace its properties
        if (typeof item === 'object') {
          Object.keys(item).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            itemContent = itemContent.replace(regex, item[key]);
          });
        }

        return itemContent;
      })
      .join('');
  });
}

/**
 * Read a template file and render it with data
 * @param {string} templatePath - Path to template file
 * @param {Object} data - Data to inject
 * @returns {string} - Rendered HTML
 */
function renderTemplateFile(templatePath, data) {
  const fs = require('fs');
  const template = fs.readFileSync(templatePath, 'utf-8');
  return renderTemplate(template, data);
}

module.exports = {
  renderTemplate,
  renderTemplateFile,
};
