CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    description TEXT,
    price DOUBLE,
    stock INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);