import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'

const FullBlog = () => {

    const [isAuthor, setIsAuthor] = useState(true);

    return (
        <div className='flex w-full'>

            <div className="">

                <div className="text-3xl font-bold pb-5">Random Full Blog Title</div>

                <div className="flex flex-col pb-7">
                    <div className="font-medium">Author: {/* TODO*/}</div>

                    <div className="font-medium">Created At: {/* TODO*/}</div>

                    {isAuthor && <div
                        className="flex mt-2 items-center rounded-md hover:cursor-pointer bg-gray-700 text-white w-fit px-6 py-2 gap-3 hover:bg-gray-500 duration-200">
                        Edit Blog
                        <FaRegEdit size={20} />
                    </div>}

                </div>

                <p className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis quisquam molestias id delectus alias cum suscipit, beatae consequatur ullam at asperiores, ratione assumenda tempora. Fugiat esse similique magnam eligendi. Laudantium voluptas, cupiditate obcaecati nisi minima autem dolorum non consectetur vel sint nemo labore aliquam distinctio excepturi, possimus quos? Ratione dicta debitis necessitatibus soluta aspernatur iste voluptatibus nobis recusandae et, quisquam iure sed minus culpa? Voluptatibus nulla earum ipsum, voluptate inventore architecto laborum atque, distinctio soluta quod eaque eius et illum natus vero iste neque, amet modi ad rem veritatis vitae perspiciatis doloremque tenetur. Rerum incidunt cupiditate expedita nobis iure excepturi soluta a! Eos dicta veniam atque sed vero sapiente laudantium animi consequatur ipsa expedita enim quidem vitae quibusdam aperiam excepturi nulla quo similique, quas voluptate voluptatum nisi, quaerat ut iste? Corrupti libero quia eum, molestias nihil error. Recusandae iste delectus quis! Aliquam debitis rerum repellendus vero maiores! Natus minus vitae aut, commodi non eum explicabo doloremque pariatur, consequatur, a et ex voluptatem? Soluta tempore rem blanditiis porro ducimus eveniet aliquid, fuga corrupti, quaerat, tempora quam voluptatibus. Dignissimos nihil expedita laudantium quae repellat excepturi dolorum nam ut, repudiandae suscipit assumenda. Similique obcaecati consectetur vero eaque tempora sequi, voluptate sint sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quasi tempore minus omnis vero odio saepe illo eum beatae exercitationem quidem id, animi quaerat nulla aliquam et provident unde explicabo distinctio soluta laboriosam odit itaque praesentium cumque! Expedita distinctio exercitationem autem officia reiciendis, possimus voluptate commodi hic, modi mollitia, molestiae rem iusto in nisi sunt. Tenetur itaque aut, iste, necessitatibus voluptate minus illum ut dolores quod assumenda doloremque quisquam fugiat velit eligendi animi nemo similique tempore voluptatum ducimus enim eos? Quaerat omnis sint earum est aliquid ratione tempora architecto, expedita explicabo consequatur molestias, dolor minus laborum vero quod sit dolorum temporibus totam doloribus delectus. In voluptates laboriosam quae maxime cum, iure voluptatibus vitae deleniti adipisci necessitatibus eaque architecto. Nisi obcaecati tempore amet quo natus earum quae praesentium est libero, architecto molestiae optio quia perferendis quisquam corporis ducimus, dolore neque. Repellat commodi deserunt eos dolorem eum et excepturi recusandae, consectetur officia, facere exercitationem placeat aperiam iure! Beatae aliquam repudiandae, dolorum iste dolore quam similique inventore odio temporibus ut quas illum id ab minus illo nihil quae dolor fugit quis natus voluptate cumque deleniti? Fugit debitis ratione enim rerum consectetur, veniam beatae praesentium, natus numquam corrupti tenetur vero eaque eum odit ipsum.
                </p>
            </div>

        </div>
    )
}

export default FullBlog
