"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produto() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const params = useParams();
  const nomeProduto = params.produto as string;

  useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${nomeProduto}`)
      .then((response) => response.json())
      .then((data) => setProduto(data))
      .catch((error) => console.error("Error:", error));
  }, [nomeProduto]);

  return (
    <main>
      <div className="container p-5">
        {produto ? (
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

              <h5 className="card-title mb-4 fw-bold">{produto.nome}</h5>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                <Image
                  src={produto.fotos[0].src}
                  className="card-img-top"
                  alt={produto.fotos[0].titulo}
                  width={300}
                  height={320}
                />
              </div>

              <p className="card-text fw-medium">
                Valor: R${Number(2000).toFixed(2)}
              </p>
              <p className="card-text fw-medium">{produto.descricao} </p>
              <p className="card-text fw-medium">{produto.usuario_id} </p>

              <h5 className="card-title mb-4 fw-bold"></h5>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
