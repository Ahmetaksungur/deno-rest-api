import { client } from "../src/db.ts";
import { fulldate, slug } from "../src/functions.ts";

const getBlogs = async ({ response }: { response: any }) => {
  response.body = await client.query(
    "SELECT id, title, content, description, categories, slug, image, status, create_date, modified_date FROM blogs order by id desc"
  );
};

const getBlog = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const id = params.id;
  response.body = await client.query(
    `SELECT id, title, content, description, categories, slug, image, status, create_date, modified_date ` +
      `FROM blogs WHERE id = ?`,
    [id]
  );
};

const addBlog = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  const body = await request.body();
  const values = await body.value;
  if (
    values.title &&
    values.content &&
    values.description &&
    values.categories &&
    values.image &&
    values.status
  ) {
    const create_date = await fulldate();
    const slugurl = await slug(values.title);
    let result = await client.execute(
      `INSERT INTO blogs(title, content, description, categories, slug, image,
        status, create_date, modified_date) values(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        values.title,
        values.content,
        values.description,
        values.categories,
        slugurl,
        values.image,
        values.status,
        create_date,
        create_date,
      ]
    );
    if (result.affectedRows === 1) {
      response.body = { message: "OK" };
      response.status = 200;
    } else {
      response.status = 404;
      response.body = { message: `Blog could not be added.` };
    }
  } else {
    response.status = 404;
    response.body = { message: `Missing data sent.` };
  }
};

const updateBlog = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const id = params.id;
  const body = await request.body();
  const values = await body.value;
  if (
    values.title &&
    values.content &&
    values.description &&
    values.categories &&
    values.image &&
    values.status
  ) {
    const modified_date = await fulldate();
    const slugurl = await slug(values.title);
    const result = await client.execute(
      "UPDATE blogs SET title = ?, content = ?, description = ?, categories = ?, slug = ?, image = ?, status = ?, modified_date = ? WHERE id = ?",
      [
        values.title,
        values.content,
        values.description,
        values.categories,
        slugurl,
        values.image,
        values.status,
        modified_date,
        id,
      ]
    );
    if (result.affectedRows === 1) {
      response.body = { message: "OK", id: id };
      response.status = 200;
    } else {
      response.status = 404;
      response.body = { message: `Error updating blog.` };
    }
  } else {
    response.status = 404;
    response.body = { message: `Missing data sent.` };
  }
};

const deleteBlog = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  const id = params.id;
  const result = await client.execute(`delete from blogs where ?? = ?`, [
    "id",
    id,
  ]);
  if (result.affectedRows === 1) {
    response.body = { message: "OK" };
    response.status = 200;
  } else {
    response.status = 404;
    response.body = { message: `Error delete blog.` };
  }
};

export { getBlogs, addBlog, getBlog, updateBlog, deleteBlog };
