
import ButtonSm from '../../../Components/Button/ButtonSm';
import './Projects.css'

const Projects = () => {
      const gradientBorder = {
            borderBottom: "2px solid linear-gradient(to right, red, green)"
      }


      return (
            <section className='max-w-6xl px-4 mx-auto'>
                  <h2 className='text-6xl font-semibold my-12 '>Projects</h2>
                  {/* Project cards */}
                  <div>
                        <div className="card w-96 border  shadow-xl rounded-none rounded-br-2xl rounded-tl-2xl p-4">
                              <figure><img className='h-52' src="/src/assets/images/pngegg.png"  /></figure>
                              <div className="card-body">
                                    <div className='px-24 relative'><h2 style={gradientBorder} className=" text-center gradient-border my-1">Shop</h2></div>
                                    <p>MY Shop Website description</p>
                                    <div className="card-actions my-4 justify-start">
                                          <ButtonSm text={'View Details'}></ButtonSm>
                                    </div>
                              </div>
                        </div>
                  </div>

            </section>
      );
};

export default Projects;