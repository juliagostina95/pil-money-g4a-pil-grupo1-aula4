using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class ComprasController : ApiController
    {
        // GET: api/Compras
        public IEnumerable<Compras> Get()
        {
            GestorCompras gCompra = new GestorCompras();
            return gCompra.ListarCompra();
        }

        // GET: api/Compras/5

        public Compras Get(int idCompra)
        {
            GestorCompras gCompra = new GestorCompras();
            return gCompra.ObtenerComprasPorId(idCompra);
        }

        // POST: api/Compras
        public HttpResponseMessage Post(Compras c)
        {
            if (ModelState.IsValid)
            {
                GestorCompras gCompras = new GestorCompras();
                gCompras.RegistrarCompra(c);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/Compras/5
      

        // DELETE: api/Compras/5
        public void Delete(int idCompra)
        {
            GestorCompras gCompras = new GestorCompras();
            gCompras.EliminarCompra(idCompra);
        }
    }
}
