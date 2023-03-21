import React, { useState, useEffect } from "react";
import ArticlePhoto from "./Article-components/ArticlePhoto";
import ArticleText from "./Article-components/ArticleText";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  // affiche valeur de uid
  let { uid } = useParams();

  // affichage des données
  const [posts, setPosts] = useState([]);
  // la chargement des données avant affichage
  const [loading, setLoading] = useState(true);

  // récouperer des données après api
  const fetchPosts = async () => {
    const responsePosts = await axios.get(
      `https://wonderouman.vercel.app/products`
    );

    // il faut parcourire tout les objet pour comparer id avec uid
    setPosts(responsePosts.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  // si _id == _id image alors affiche ces image en fesant une map. à faire:

  return (
    <>
      {posts.map((post, index) =>
        post._id === uid ? (
          <div id="container" className="w-full flex justify-center">
            {/* où on structure l'affichage images */}
            <ArticlePhoto key={index} images={post.images} />

            {/* où on structure l'ffichages nome, description, prix */}
            <ArticleText
              name={post.name}
              description={post.description}
              price={post.price}
              stock={post.stock}
            />
          </div>
        ) : null
      )}
    </>
  );
};

export default ProductPage;
