import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPageProps {
  params: {
    companionId: string;

  };
};

const CompanionIdPage = async ({
  params
}: CompanionIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  return ( 
    <>
      <div className="flex flex-col relative shrink-0 box-border h-auto mt-5 pb-8">
        <div className="flex-col flex relative shrink-0 box-border w-full overflow-hidden max-w-screen-lg h-auto grow-0 m-auto max-md:flex max-sm:flex">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Ff9fddaa88ecf49d3974d51b211cf9d54"
            className="absolute h-full w-full object-contain object-center inset-0"
          />
          <div className="relative shrink-0 box-border h-auto text-fuchsia-500 text-5xl grow-0 mt-auto mx-auto pt-72 max-md:pt-10 max-sm:text-4xl">
            Infinite Worlds Await
          </div>
          <div className="relative shrink-0 box-border h-auto text-fuchsia-500 font-semibold text-2xl mt-auto mb-48 mx-auto max-md:mb-72 max-sm:text-sm">
            Where do you want to go today?
          </div>
          <button
            className="relative shrink-0 box-border appearance-none bg-fuchsia-500 text-fuchsia-300 rounded text-center cursor-pointer text-2xl border mb-14 mx-auto px-8 py-1.5 max-md:mb-64 max-sm:mb-auto"
          >
            Enter
          </button>
        </div>
      </div>
      <div className="flex flex-col relative shrink-0 box-border mt-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F7942d2ed69da4fe5add40d1513f8f65c"
              className="aspect-[2] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
            />
            <div className="relative shrink-0 box-border h-auto mt-5">
              TRADING
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2Fd9488e8886054cf9b736c05ecebf59ef"
              className="aspect-[2] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
            />
            <div className="relative shrink-0 box-border h-auto text-center mt-5">
              WRITING
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F237a4302199e41e987b8de37f2277af4%2F37ad1155b5474f00bd949e9f35a31067"
              className="aspect-[2] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden mt-5"
            />
            <div className="relative shrink-0 box-border h-auto text-center mt-5">
              PHILOSOPHY
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col relative shrink-0 box-border min-h-[100px] p-5"
      >
        <section className="flex flex-col relative shrink-0 box-border min-h-[100px] w-full self-stretch grow max-w-[1200px] items-stretch mx-auto p-5" />
      </div>
    </>
  );
}
 
export default CompanionIdPage;