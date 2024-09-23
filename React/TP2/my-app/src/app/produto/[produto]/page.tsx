"use client";

import api from "@/app/services/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Produto() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const params = useParams();
  const nomeProduto = params.produto as string;

  useEffect(() => {
    console.log(`params.produto: ${params.produto}`);
    console.log(`Request URL: /produto/${params.produto}`);

    api
      .get(`/produto/${params.produto}`)
      .then((response) => {
        setProduto(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.produto]);

  return (
    <main>
      <div className="container p-5">
        {produto ? (
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

              <h5 className="card-title mb-4 fw-bold">{produto.nome}</h5>

              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
                {produto.fotos.map((foto) => (
                  <div className="col" key={foto.titulo}>
                    <Image
                      src={foto.src}
                      className="card-img-top"
                      alt={foto.titulo}
                      width={300}
                      height={320}
                    />
                  </div>
                ))}
              </div>

              <p className="card-text fw-medium">
                Valor: R${Number(produto.preco).toFixed(2)}
              </p>
              <p className="card-text fw-medium">
                Descrição: {produto.descricao}{" "}
              </p>
              <p className="card-text fw-medium">
                Anunciado por:{produto.usuario_id}{" "}
              </p>

              <h5 className="card-title mb-4 fw-bold"></h5>
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </main>
  );
}
