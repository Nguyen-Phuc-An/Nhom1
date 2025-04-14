document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");
    const header = document.querySelector("header");

    button.addEventListener("click", function () {
        // Kiểm tra nếu đã hiển thị rồi thì không thêm nữa
        if (document.getElementById("membersInfo")) return;

        const members = [
            { name: "Tom", image: "./img/anne.jpg" },
            { name: "Jerry", image: "./img/jerry.png" },
            { name: "Spike", image: "./img/spike.png" }
        ];

        const container = document.createElement("div");
        container.id = "membersInfo";
        container.style.marginTop = "20px";
        container.style.display = "flex";
        container.style.justifyContent = "center";
        container.style.gap = "30px";
        container.style.flexWrap = "wrap";

        members.forEach(member => {
            const memberDiv = document.createElement("div");
            memberDiv.style.textAlign = "center";

            const img = document.createElement("img");
            img.src = member.image;
            img.alt = member.name;
            img.style.width = "100px";
            img.style.borderRadius = "50%";
            img.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
            img.style.marginBottom = "10px";

            const name = document.createElement("p");
            name.textContent = member.name;
            name.style.fontWeight = "600";

            memberDiv.appendChild(img);
            memberDiv.appendChild(name);
            container.appendChild(memberDiv);
        });

        header.appendChild(container);
    });
});
