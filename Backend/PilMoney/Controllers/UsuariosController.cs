using Microsoft.AspNetCore.Cors;
using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PilMoney.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/usuarios")]
    [System.Web.Http.Cors.EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UsuariosController : ApiController
    {
        // GET: api/Usuarios

        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorUsuarios gCuentas = new GestorUsuarios();
            List<Usuarios> l = gCuentas.ListarUsuarios();
            return Ok(l);
        }

        // GET: api/Usuarios/5

        // POST: api/Usuarios

      

        
        public HttpResponseMessage Post(Usuarios u)
        {
      
            if (ModelState.IsValid)
            {
                GestorUsuarios gUsuarios = new GestorUsuarios();
                gUsuarios.RegistrarUsuario(u);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }

            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }
        
          

            // PUT: api/Usuarios/5
            public void Put(Usuarios u)
        {
            GestorUsuarios gUsuarios = new GestorUsuarios();
            gUsuarios.ModificarUsuario(u);
        }

        // DELETE: api/Usuarios/5

    }
}
