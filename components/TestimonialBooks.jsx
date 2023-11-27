import Image from "next/image";
import React from "react";
import styles from "./css/TestimonialBooks.module.css";
import Link from "next/link";

const cover_images_list = [
  "/images/book_covers/cover_1.png",
  "/images/book_covers/cover_2.png",
  "/images/book_covers/cover_1.png",
  "/images/book_covers/cover_2.png",
  "/images/book_covers/cover_1.png",
  "/images/book_covers/cover_2.png",
];

const TestimonialBooks = () => {
  return (
    <div className={`${styles["books"]}`}>
      <div className={`${styles["books-slide"]}`}>
        {cover_images_list.map((cover_image, index) => (
          <Link
            className={`${styles["single-book"]} mx-3 shadow-md max-sm:w-32  max-md:w-36`}
            href=""
            key={index}
          >
            <Image
              src={cover_image}
              key={index}
              width={200}
              height={300}
              className="rounded-lg shadow-md"
              alt="AI generated book example"
            />
          </Link>
        ))}
      </div>
      <div className={`${styles["books-slide"]}`}>
        {cover_images_list.map((cover_image, index) => (
          <Link
            className={`${styles["single-book_"]} ${styles["single-book"]} mx-3 shadow-md  max-sm:w-32 max-md:w-36`}
            href=""
            key={index}
          >
            <Image
              src={cover_image}
              key={index}
              width={200}
              height={300}
              className="rounded-lg shadow-md"
              alt="AI generated book example"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TestimonialBooks;
