using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class ContactosController : ApiController
    {
        // GET: api/Contactos
        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorContactos gContactos = new GestorContactos();
            List<Contactos> l = gContactos.ListarContactos();
            return Ok(l);
        }

        // GET: api/Compras/5

        public Contactos Get(int id)
        {
            GestorContactos gContactos = new GestorContactos();
            return gContactos.ObtenerContactoPorId(id);
        }

        // POST: api/Contactos
        public HttpResponseMessage Post(Contactos c)
        {
            if (ModelState.IsValid)
            {
                GestorContactos gContactos = new GestorContactos();
                gContactos.RegistrarContacto(c);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/TipoMonedas/5
        

        // DELETE: api/TipoMonedas/5
        public void Delete(int id)
        {
            GestorContactos gContactos = new GestorContactos();
            gContactos.EliminarContacto(id);
        }
    }
}
