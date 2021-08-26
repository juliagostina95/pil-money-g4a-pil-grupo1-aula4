using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class ServiciosController : ApiController
    {
        // GET: api/Servicios
        public IEnumerable<Servicios> Get()
        {
            GestorServicios gServicio = new GestorServicios();
            return gServicio.ListarServicios();
        }

        // GET: api/Servicios/5
        public Servicios Get(int idServicio)
        {
            GestorServicios gServicio = new GestorServicios();
            return gServicio.ObtenerServicioPorId(idServicio);
        }

        // POST: api/Servicios
        public HttpResponseMessage Post(Servicios s)
        {
            if (ModelState.IsValid)
            {
                GestorServicios gServicio = new GestorServicios();
                gServicio.RegistrarServicio(s);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/Servicios/5
       

        // DELETE: api/Servicios/5
        public void Delete(int idServicio)
        {
            GestorServicios gServicio = new GestorServicios();
            gServicio.EliminarServicio(idServicio);
        }
    }
}
