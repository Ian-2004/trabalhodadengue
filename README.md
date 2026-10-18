# Mosquito Brasil

Site informativo de conscientização sobre a dengue, desenvolvido em React para a atividade prática de Front-End.

## Sobre o projeto

O Mosquito Brasil é um site criado para conscientizar as pessoas sobre a prevenção da dengue e os cuidados necessários para evitar a proliferação do mosquito *Aedes aegypti*.

A dengue é uma doença infecciosa causada por um vírus transmitido pela picada da fêmea do mosquito *Aedes aegypti*. Esse mosquito costuma se reproduzir em locais com água parada, como pneus, garrafas, vasos de plantas, caixas-d'água destampadas e outros recipientes.

A dengue é um problema de saúde pública e pode atingir pessoas de todas as idades. Em alguns casos, a doença pode evoluir para formas graves, por isso é importante conhecer os sintomas e as formas de prevenção.

## Problema escolhido

"Limitações na Antecipação de Surtos de Dengue na Cidade do Recife" Problema retirado do Banco de BOs, de um site de desafios da sociedade de Recife: a grande quantidade de focos do mosquito e de doenças transmitidas por ele, como a dengue.

## Solução proposta

Um site de informação e prevenção, com três telas:

- **Início**: resumo de como agir (identificar, eliminar e compartilhar) e curiosidades sobre a dengue.
- **Focos do mosquito**: mapa ilustrativo com áreas de risco (dados fictícios) e cards com os lugares onde a água mais se acumula.
- **Prevenção e checklist**: lista interativa com barra de progresso, sintomas, sinais de alerta, formas de proteção e links para fontes oficiais do Ministério da Saúde, servindo como uma espécie de contato para diminuição de probabilidade de aumento nos surtos de dengue e outras doenças.

## Objetivo

Informar a população sobre os principais focos do mosquito da dengue e mostrar maneiras de prevenir sua reprodução.

## Tecnologias utilizadas

- React 19
- Vite
- JavaScript
- HTML
- CSS

Recursos do React aplicados: componentes reutilizáveis, props, `useState` e eventos. O layout é responsivo, com media queries para celular, tablet e desktop.

## Estrutura do projeto

```
src/
├── components/   componentes reutilizáveis (Header, Footer, cards, mapa)
├── sections/     telas do site (Inicio, Focos, Prevencao, Checklist, Saude)
├── data/         conteúdo em arrays (focos, tarefas, fatos, links)
├── styles/       CSS do mapa
└── App.jsx       estado e troca de telas
```

## Pré-requisitos

- [Node.js](https://nodejs.org) (versão mais recente) e npm instalados
- Um editor de código (recomendado: VS Code)

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Ian-2004/trabalhodadengue.git
   ```

2. Abra a pasta do projeto no VS Code e abra o terminal.

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   npm run dev
   ```

   No Windows, se o PowerShell bloquear o comando, use `npm.cmd run dev`.

5. Abra no navegador o endereço informado pelo terminal (normalmente http://localhost:5173).

## Repositório

https://github.com/Ian-2004/trabalhodadengue

## Equipe

<table>
  <tr>

  <td align="center">
      <a href="https://github.com/Ian-2004" title="Inaldo Lima">
        <img src="src/assets/ianpicture.jpg" width="100px;" alt="Foto do Ian"/><br>
        <sub><b>Inaldo da Silva Lima</b></sub>
      </a>
    </td>

  <td align="center">
      <a href="https://github.com/Igor-Silva99" title="José Igor">
        <img src="src/assets/igorpicture.png" width="100px;" alt="Foto de Igor"/><br>
        <sub><b>José Igor Nascimento da Silva</b></sub>
      </a>
    </td>

   </tr>
</table>

---

Projeto desenvolvido para fins educativos, com informações de domínio público.
