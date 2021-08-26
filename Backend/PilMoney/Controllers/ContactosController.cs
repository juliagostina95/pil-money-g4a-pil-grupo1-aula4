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
        public IEnumerable<Contactos> Get()
        {
            GestorContactos gContactos = new GestorContactos();
            return gContactos.ListarContactos();
        }

        // GET: api/Compras/5

        public Contactos Get(int idContacto)
        {
            GestorContactos gContactos = new GestorContactos();
            return gContactos.ObtenerContactoPorId(idContacto);
        }

        // POST: api/Contactos
        public void Post(Contactos c)
        {
            GestorContactos gContactos = new GestorContactos();
            gContactos.RegistrarContacto(c);
        }

        // PUT: api/TipoMonedas/5
        

        // DELETE: api/TipoMonedas/5
        public void Delete(int idContacto)
        {
            GestorContactos gContactos = new GestorContactos();
            gContactos.EliminarContacto(idContacto);
        }
    }
}
