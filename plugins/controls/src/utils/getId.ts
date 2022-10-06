let id = 0;

// A simple unique ID generator for internal references to controls.
export default function getId(): number {
    return id++;
}
