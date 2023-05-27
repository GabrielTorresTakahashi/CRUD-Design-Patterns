import Category from '@/models/Category';
import Member from '@/models/Member';
import Product from '@/models/Product';
import User from '@/models/User';
import mongoose from 'mongoose';

const bodyCategory = {
    name: "Banheiro",
    description: "Itens para banheiro"
};

const bodyProduct = {
    name: "Camiseta",
    price: "25,99",
    description: "Branca, tamanho GG"
};

const bodyUser = {
    name: "User001",
    password: "123",
    email: "test@domain.com"
};

const arrMembers = [
    {
        name: "Gabriel Torres Takahashi",
        ra: "600601"
    },
    {
        name: "Kevin de Souza Lima",
        ra: "601969"
    },
    {
        name: "Laura Lacort Zimmermann",
        ra: "603201"
    },
    {
        name: "Renan Palavizini Biazolla",
        ra: "608831"
    },
    {
        name: "Rebeca Yamanaka Alves Ferreira",
        ra: "600482"
    },
    {
        name: "Matheus Aparecido",
        ra: "601721"
    },
];

const connectMongo = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/crudjs");
    if ((await Category.find()).length == 0) await Category.create(bodyCategory);
    if ((await Product.find()).length == 0) await Product.create(bodyProduct);
    if ((await User.find()).length == 0) await User.create(bodyUser);
    if ((await Member.find()).length == 0) await Member.insertMany(arrMembers);
}

export default connectMongo;
