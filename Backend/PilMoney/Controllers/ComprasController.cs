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
        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorCompras gCompra = new GestorCompras();
             List < Compras > l = gCompra.ListarCompra();
            return Ok(l);
        }

        // GET: api/Compras/5
        [HttpGet]
        public Compras Get(int id)
        {
            GestorCompras gCompra = new GestorCompras();
            return gCompra.ObtenerComprasPorId(id);
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
        public void Delete(int id)
        {
            GestorCompras gCompras = new GestorCompras();
            gCompras.EliminarCompra(id);
        }
    }
}
