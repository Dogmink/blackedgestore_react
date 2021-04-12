export default function getDesigns({ keyid }) {
  const baseUrl = `https://blackedgestore.com/API/designs/?${keyid}`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      const designs = data.map((design) => {
        const { name, img, id, precio, design_desc, cat_id } = design;
        return { name, img, id, precio, design_desc, cat_id };
      });
      return designs;
    });
}
