using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/nombreUsuario")]
    [System.Web.Http.Cors.EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class NombreUsuarioController : ApiController
    {
        // GET: api/NombreUsuario
        [HttpGet]
        public IHttpActionResult GetNombre(string nm)
        {
            GestorNombreUsuario gNombreUsuario = new GestorNombreUsuario();
            NombreUsuario o = gNombreUsuario.ObtenerNombreUsuario(nm);
            return Ok(o);
        }
    }
}
