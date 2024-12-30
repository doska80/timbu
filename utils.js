export function createElement(type, id, content, events = {}) {
    const element = document.createElement(type);
    element.id = id;
    element.textContent = content;
    for (const [event, handler] of Object.entries(events)) {
        element.addEventListener(event, handler);
    }

    document.body.appendChild(element)
    return element;
}
