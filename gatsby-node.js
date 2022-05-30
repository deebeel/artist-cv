const path = require('node:path');



module.exports.createPages = async function createPages({actions, graphql, basePath}) {
    const {default: slugify} = await import('@sindresorhus/slugify');
    const {createPage} = actions;
    const workTemplate = path.resolve(`src/templates/workPage.tsx`);
    const mediaTemplate = path.resolve(`src/templates/mediaPage.tsx`);
    const {data, errors} = await graphql(`
    query workPageQuery {
        allContentfulWork {
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

    for (const work of data.allContentfulWork.works) {
        const workPath = `${basePath}/works/${slugify(work.title)}`;
        createPage({
            path: workPath,
            component: workTemplate,
            context: {
                id: work.id,
                title: work.title
            }
        });
        const isNotOnlyOne = work.media.length > 1;
        for (let i = 0; i < work.media.length; i++) {
            const currentMedia = work.media[i];
            createPage({
                path: `${workPath}/${slugify(currentMedia.title)}`,
                component: mediaTemplate,
                context: {
                    id: currentMedia.id,
                    title: currentMedia.title,
                    workId: work.id,
                    isNotOnlyOne,
                    nextTitle: isNotOnlyOne ? work.media[newIndex(i + 1, work.media.length)].title: undefined,
                    prevTitle: isNotOnlyOne ? work.media[newIndex(i - 1, work.media.length)].title: undefined
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
