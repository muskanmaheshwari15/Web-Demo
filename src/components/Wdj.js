import React, { useState } from 'react';

const Wdj = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cards = [
    {
      title: 'Industry Knowledge and Focus',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JBnN88FSsX-38sB1nfrfQ7gAdBQmwI2Zxg&usqp=CAU',
      description: 'Demonstrate your understanding of the client\'s industry-specific challenges and opportunities. Tailoring solutions to address sector-specific requirements can be compelling for clients seeking specialized expertise.'
    },
    {
      title: 'Innovative Solutions',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-innovation-2606645-2175598.png',
      description: 'Highlight any proprietary technologies, patents, or industry recognition to demonstrate your commitment to innovation.'
    },
    {
      title: 'Expertise and Experience',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKH4gxtswoGUQ853miL4c5-JClTwXWE5oSvMG9LK_r1_8igUpoIrQ8sG8OfPtiJ36FeI&usqp=CAU',
      description: 'Highlight your team\'s expertise, qualifications, and experience in various IT domains such as software development, cybersecurity, cloud computing, data analytics, etc. Demonstrating a track record of successful projects can instill confidence in potential clients.'
    },
    {
      title: 'Cost-effectiveness',
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADIyMjo6OgXFxd0dHSenp77+/uhoaFubm5ra2unp6fu7u7i4uJxcXHQ0NA+Pj6CgoK4uLjy8vJkZGRLS0u/v7+KiopbW1thYWHb29uMjIxSUlK0tLQdHR1QUFA0NDRDQ0MrKysPDw8kJCRGRkaXl5ccHBw3NzcvLy+Ijy7TAAAJV0lEQVR4nO2daWOqOhCGRbRQwVKkVetSa2tt+///4BUJkGUSsil67jyfekBDXkgmswTPYIAgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCILcI9PZcfz29jZZJFnRd18uwHDyFVA8x/+WyChm5FVMVn13yx+JKO/M2z/yHMMPicATSd+d88FMrq98jH13z52jUmAQfER999CRvENgEIzuezLGnQJPT7HvTrow1BB4Wjb67qY9hZbAINj23VFrlpoKg3udinpjtOSl765a8qetMLhPB26uL/BOF/5XA4V3ORNTE4FB3Hd3LZAFFDCvfXfXAu2louIO3VMg5lWR9d1fY8ym4T1GivrLfUXed4eNUQe+IuO+O2yMqcJN3x02xsSjKfnru8PGmCp87rvDxphaGjvPdB2MWoLQswY1oaFCO1u6YNq4rsLIUKHdetinwsGzmUI7n6ZXhQuJFAl2fqm9wuk8flgvHuIks/aIzUyN5XLIpmN1FRbbCf21/dEyxWCk0DLdNs2yrGogOf2l9zRWT+Llf62uvzZRaHMBQtWA7jxeyVIPFqbOJLpYmDffwCucqh6losrwNzW+dHfNosE+TTMl8z1u+ncYSZ9n+KnsxYPpxXVT3kFwtFOXJozFWMbpoCp2PcGPsdP4LU17oJuqebfSNwTyJN9z4ktBlmPLffh3ueGbMPaONXM1NsZ6rs43A26uEM+VtoU/Ziox0krWWFix8LujTXGYZsJnYkCh8cKs439b+Nydw38mfAUwCqDCYG3Yl1WnQIv0BWNfgs/9bvd8YBsVvwMsg6V9+zgIh0095GmHQIuVcNd++31db68qspja8/HLj1Lxqa/r2Z/O3pgTxnavUNYvxOHUSWtiHrk1ejpuTh1YiUIslzPn2e0U5hWGB6m+b4t4p7lhO+DL4aY+y5YJeA+Su7Eb9qx5tFE8gvoOc+OWBoPmMdErXj6Oh6RbTX7oiTrPP0LOmvCnbcpEoejBfdvoawUwa+hveWRZNRi+i8+Jm4X8TOOzZiObnp2aGY/aNnaxXTxe3+1Ryhwm+YTD2QxGtXlsnd1fVgFxEqelTf7M56IDbV1EKbJ58pBsh+ZOfE0d2nH3p8mYnNfWeulrdgfwq3LGHv0R/JL+SgwrpostbU5oH1Efq0cyv1RUd1huAIOfa4pieGNGWQuV9TrnzomkOlSYcAIq5SpnJOWvcCVITC0aAjqvd3YsSRxIBjPvtxAbp0jLD7X6U2SzZJGPO8mPyVwZlzesZZdnMpdlHEvcbOIw8f1vHMVEFhlorBfzsTqcFtgl3SOjehYf4gk2N1s2VPkFX+ezovvfXmq2B3vT5X4Dq58Orx0uHJk4QLDFKiwfERmBK+p7FHu6VcirVIcDxRj4ih4jpUaylRMY0Fx+vVwIq79iWGHwSjfCx/5BR53IbJcJz17hCbxUnQPOcArLp1yZ3ReJQtYzFYNjRcJGHUnoIM/NVmYBylpxCjfNjX6XKgw+qQsJT0W+5bUrGtRBOgeq09BA5qtAgyavVp6VJm7zxrnibao0ahUftw2SIUI6Crl8vMK0+XTa3hqI+o0PPrqSrRZ+BMrmORkf0ETl825Z45yejanihQ+ycPCLv8T19iXwFLxDzYd0l1iSB4bjlFWoMu7VtOZzxXAO3rSurQIyJ2TcaYZdtEJgOWiIIYWfYJN6uVFdAMcwovrcDT1rBVND5Z6qp8RZU9ilMdyL2AUwGKsTmqkBMmWqlZ3LH59c92I2fv38+V6Q4ch9ALyLbgu9yK94iZ/zCc0CERmZzD9qhI3zq85r+52EFeJUrMI8zfpQZV3qHD3btODZclEC6HQY7rzQQVj4iF+qp7D6bD2h2HieM1YR13kwEdX1hpoNgkEjY0lrIpJp2BgspmX2GQo1Kchr8uGsiQgWrTqsNUxJhrYJITgZy+N8WpQnM3FTzA5qz+DdERN4k5bDhwGIWaAc6Dex+cUAdOggl8Jo14UBfOaWDFPwJrOQ3BPlfAG70Mox8i4chSZBdwXNFj5vua8Od5ZziIvC7FkVZxKoEIwqxBKcNzgPuHauOlI69fNiH4fgNudpmPIKwdDNLimjxxd3LRJfg0uy8KkP7rDGPrQnoDWPEQUEd0/roaasttcJYMEidU4neNfLqOtrbnAueL3wKiTWVhNwn4ud7DLQtQj2iTVNuNTanhz+k0RRYW0V4H0jCvdZ8gsPlx2jJZyb3O6pAF3w1j2TbCQrJGZjI1tlL60vENaGNth7F1aNeWsa5YFyCizfE2nF8OJjtIR7GtTCNlpTdz5bUDG42u/JcsrZPjzO5FUT01cO7OAd0ZRZgJf5MUnWYyaG/epOdUTT4XyWbIcr5bZI0/34tgjx2ov68ztvLzN2XMgfgg+jzCj4e+PW9OUte8RahcwknoyGv/qt/gZZd4CK2hTUOLbfBSHiObmmBjId0Zbby/S99fo28fXGaMke7kSUbfOX1+/X5STf2r8aAnPNMVpiuRXcAbUPewF8TjAdFOb6BXgnRZcn+eS+8kumqgRw5LBMPiqcCNPtyW7s5R2ZuzgCE1Wd6Jo/8aL4gasnJ1dnovr24XoCFWN0FLkqVIzT620Z/JV3ooyz3BSqAhbnH8+IQh1SRZHibA0cFSqSd+9aHQxTcO0v4o20YW2qLJ+LLT03YLglDmIpRFx+EvOhH4V+kuhMjiNS7cfQh0QAzgpV23cNoHNYfmpHdQ7TXSFfV3dsrSm2uVL4U2j6+z0S6oHqqXbU1EEcFDZ1A9UWGH3qsge/0duOdkj4UAhVNC0gd91LW1R534tCP3m8qgjsZ6NI5lmhn1zsl7+m6NDGj0I/dclzS6a/BgTBlCwdFDLlQh+15cjXMwwvodDHHhZf85BNZ/pS6MG1IfbPedskV5D1ptDdtXn0NKWLSyl0dm3mfsY7v8fGn0Jn16Zux63OKWxBcfCRfLYV0AGUi10W97b4VOjUNWrPf2QfVQMv6XhVGO2tG2MMYGQbQEG/2uFVof3eVT6DPB2bb/3ZwO8oeVY4KI5744YOOVSPS7OhAZl0N4BvhecHYNa3C7/HewmFt4WDwjv5rV1UiApvH1SICm8fVIgKbx+HQg8qvBFQISq8fVAhKrx9HBS6/K73FXHYQYsKbwRUiApvH1T4v1Z43TcOrPn3FY7p/0jLiHtRiCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8n/lP+g/hHkplFV7AAAAAElFTkSuQmCC',
      description: 'Offer competitive pricing while demonstrating the value your solutions provide. Showcase how your services can help clients achieve cost savings, increase efficiency, or generate revenue in the long term.'
    }
  ];

  return (
    <div className='bg-white p-4 md:p-12'>
      <div className='context'>
        <h1 className="mt-4 md:mt-12 text-center text-3xl  text-blue-900 uppercase font-bold">
          Why Choose us
        </h1>
        <div className='flex justify-center'>
            <div className='w-12 md:w-24 border-b-2 md:border-b-4 border-blue-900'></div>
        </div>
      </div>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4 md:mt-6 " >
        {cards.map((card, index) => (
          <div 
            key={index}
            className={`bg-white overflow-hidden text-gray-600   hover:text-gray-800 rounded-lg shadow-md  hover:shadow-2xl p-2 md:p-3 group transition-colors duration-300 ease-in-out ${
              hoveredIndex === index ? '' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-justify text-sm px-5  ">
              <img alt="card img" className="rounded-t  md:h-50 w-full m-auto" src={card.image} />
              <h3 className="font-semibold my-2 md:my-4 text-xl md:text-2xl  text-center">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Wdj;