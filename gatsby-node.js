const path = require('node:path');

module.exports.createPages = async function createPages({actions, graphql, basePath}) {
    const {default: slugify} = await import('@sindresorhus/slugify');
    const {createPage} = actions;
    const workTemplate = path.resolve(`src/templates/workPage.tsx`);
    const mediaTemplate = path.resolve(`src/templates/mediaPage.tsx`);
    const {data, errors} = await graphql(`
    query workPageQuery {
        content:allContentfulWork {
            works:nodes {
                id
                title             
                media {
                    id                                 
                    title
                } 
            }
        }
    }`);

    if (errors) {
        throw errors;
    }

    for (const work of data.content.works) {
        const workPath = `${basePath}/works/${slugify(work.title)}`;
        createPage({
            path: workPath,
            component: workTemplate,
            context: {
                id: work.id,
                title: work.title
            }
        });
        const mediaPathGlob = `${workPath}/*`
        for (const currentMedia of work.media) {
            createPage({
                path: `${workPath}/${slugify(currentMedia.title)}`,
                component: mediaTemplate,
                context: {
                    id: currentMedia.id,
                    title: currentMedia.title,
                    mediaPathGlob,
                    modal: true,
                }
            });
        }
    }


}

function newIndex(tempCurrentIndex, length) {
    if (length === 1) {
        return -1;
    }
    return tempCurrentIndex < 0
        ? length - 1
        : tempCurrentIndex === length
            ? 0
            : tempCurrentIndex;
}
