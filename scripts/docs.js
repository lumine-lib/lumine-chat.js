const { renameSync, existsSync } = require("fs");
const { join } = require("path");

function renameReadme(dir) {
    const readme = join(dir, "README.md");
    const index = join(dir, "index.md");

    if (existsSync(readme)) {
        renameSync(readme, index);
    }
}

renameReadme("docs/api");