"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        const url = window.location.pathname;
        const id = url.split("/").pop();
        console.log(id);
        e.preventDefault();
        const category = form.category.value;
        const price = form.price.value;
        const res = yield fetch(`http://localhost:4000/expenses/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                category,
                price,
            }),
        });
        console.log(res);
    }));
}
